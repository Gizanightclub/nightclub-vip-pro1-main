'use client';

import { useState } from 'react';

export default function TestApiPage() {
  const [healthResult, setHealthResult] = useState<any>(null);
  const [validateResult, setValidateResult] = useState<any>(null);
  const [testCode, setTestCode] = useState('');
  const [loading, setLoading] = useState(false);

  const testHealth = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/health');
      const data = await response.json();
      setHealthResult(data);
    } catch (error) {
      setHealthResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
    setLoading(false);
  };

  const testValidation = async () => {
    if (!testCode) return;

    setLoading(true);
    try {
      const response = await fetch('/api/discount-codes/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: testCode })
      });
      const data = await response.json();
      setValidateResult({ status: response.status, data });
    } catch (error) {
      setValidateResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">اختبار API Routes</h1>

        {/* Health Check Test */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">اختبار Health Check</h2>
          <button
            onClick={testHealth}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'جاري الاختبار...' : 'اختبار الاتصال'}
          </button>

          {healthResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">نتيجة الاختبار:</h3>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(healthResult, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Validation Test */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">اختبار التحقق من كود الخصم</h2>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="أدخل كود الخصم للاختبار"
              value={testCode}
              onChange={(e) => setTestCode(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={testValidation}
              disabled={loading || !testCode}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'جاري الاختبار...' : 'اختبار الكود'}
            </button>
          </div>

          {validateResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">نتيجة الاختبار:</h3>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(validateResult, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h3 className="font-semibold text-yellow-800 mb-2">ملاحظات مهمة:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• تأكد من أن متغيرات البيئة مضبوطة بشكل صحيح في Vercel</li>
            <li>• راجع Console logs في Vercel Functions للمزيد من التفاصيل</li>
            <li>• تأكد من إعدادات Supabase RLS (Row Level Security)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
