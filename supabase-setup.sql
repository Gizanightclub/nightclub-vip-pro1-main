-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create programs table
CREATE TABLE IF NOT EXISTS programs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create pricing_packages table
CREATE TABLE IF NOT EXISTS pricing_packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    currency TEXT DEFAULT 'EGP',
    features TEXT[] DEFAULT '{}',
    is_popular BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create discount_codes table
CREATE TABLE IF NOT EXISTS discount_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    discount_percentage DECIMAL(5,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    is_percentage BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    valid_from TIMESTAMP WITH TIME ZONE,
    valid_until TIMESTAMP WITH TIME ZONE,
    usage_limit INTEGER DEFAULT 0,
    used_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create universal_offers table
CREATE TABLE IF NOT EXISTS universal_offers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT NOT NULL,
    image_url TEXT,
    button_text TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE discount_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE universal_offers ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for website)
CREATE POLICY "Allow public read access on programs"
ON programs FOR SELECT
USING (true);

CREATE POLICY "Allow public read access on pricing_packages"
ON pricing_packages FOR SELECT
USING (is_active = true);

CREATE POLICY "Allow public read access on discount_codes"
ON discount_codes FOR SELECT
USING (is_active = true AND
       (valid_from IS NULL OR valid_from <= NOW()) AND
       (valid_until IS NULL OR valid_until >= NOW()) AND
       (usage_limit = 0 OR used_count < usage_limit));

CREATE POLICY "Allow public read access on universal_offers"
ON universal_offers FOR SELECT
USING (is_active = true);

-- Create policies for authenticated admin access (for dashboard)
-- Note: Replace 'your-admin-email@example.com' with your actual admin email

-- Programs policies
CREATE POLICY "Allow admin full access on programs"
ON programs FOR ALL
USING (auth.jwt() ->> 'email' = 'sabersry66@gmail.com');

-- Pricing packages policies
CREATE POLICY "Allow admin full access on pricing_packages"
ON pricing_packages FOR ALL
USING (auth.jwt() ->> 'email' = 'sabersry66@gmail.com');

-- Discount codes policies
CREATE POLICY "Allow admin full access on discount_codes"
ON discount_codes FOR ALL
USING (auth.jwt() ->> 'email' = 'sabersry66@gmail.com');

-- Universal offers policies
CREATE POLICY "Allow admin full access on universal_offers"
ON universal_offers FOR ALL
USING (auth.jwt() ->> 'email' = 'sabersry66@gmail.com');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_programs_featured ON programs(is_featured);
CREATE INDEX IF NOT EXISTS idx_programs_created_at ON programs(created_at);

CREATE INDEX IF NOT EXISTS idx_pricing_packages_active ON pricing_packages(is_active);
CREATE INDEX IF NOT EXISTS idx_pricing_packages_order ON pricing_packages(order_index);

CREATE INDEX IF NOT EXISTS idx_discount_codes_active ON discount_codes(is_active);
CREATE INDEX IF NOT EXISTS idx_discount_codes_code ON discount_codes(code);
CREATE INDEX IF NOT EXISTS idx_discount_codes_valid_until ON discount_codes(valid_until);

CREATE INDEX IF NOT EXISTS idx_universal_offers_active ON universal_offers(is_active);
CREATE INDEX IF NOT EXISTS idx_universal_offers_created_at ON universal_offers(created_at);

-- Insert sample data

-- Sample programs
INSERT INTO programs (title, description, image_url, is_featured) VALUES
('حفلة عيد ميلاد VIP', 'احتفل بعيد ميلادك في أجواء استثنائية مع خدمة VIP مميزة وطاولات خاصة', '/images/nightclubegypt.com (2).jpg', true),
('ليلة الموسيقى الشرقية', 'أمسية رائعة مع أفضل الفنانين والموسيقى الشرقية الأصيلة', '/images/nightclubegypt.com (3).jpg', false),
('حفلات الشركات', 'نظم حفلة شركتك معنا واستمتع بأجواء مميزة وخدمة احترافية', '/images/nightclubegypt.com (4).jpg', true);

-- Sample pricing packages
INSERT INTO pricing_packages (name, price, currency, features, is_popular, is_active, order_index) VALUES
('الباقة الأساسية', 500, 'EGP', ARRAY['طاولة لـ 4 أشخاص', 'مشروبات ترحيبية', 'دخول مجاني', 'خدمة عادية'], false, true, 1),
('الباقة الذهبية', 1000, 'EGP', ARRAY['طاولة لـ 6 أشخاص', 'مشروبات مفتوحة', 'قائمة طعام مختارة', 'خدمة VIP', 'دخول أولوية'], true, true, 2),
('الباقة البلاتينية', 2000, 'EGP', ARRAY['طاولة لـ 8 أشخاص', 'بار مفتوح', 'عشاء كامل', 'خدمة شخصية', 'منطقة خاصة', 'مصور شخصي'], false, true, 3);

-- Sample discount codes
INSERT INTO discount_codes (code, discount_percentage, is_percentage, is_active, valid_until, usage_limit) VALUES
('WELCOME20', 20, true, true, NOW() + INTERVAL '30 days', 100),
('VIP50', 50, true, true, NOW() + INTERVAL '7 days', 20),
('NEWYEAR', 30, true, true, NOW() + INTERVAL '60 days', 0);

-- Sample universal offer
INSERT INTO universal_offers (title, subtitle, description, image_url, button_text, is_active) VALUES
('عرض خاص لفترة محدودة', 'احجز الآن واحصل على خصم 25%', 'استمتع بتجربة لا تُنسى في أفضل نايت كلوب في القاهرة مع عرضنا الحصري. جميع الباقات متاحة بخصم خاص لفترة محدودة فقط!', '/images/nightclubegypt.com.jpg', 'احجز الآن', true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pricing_packages_updated_at BEFORE UPDATE ON pricing_packages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_discount_codes_updated_at BEFORE UPDATE ON discount_codes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_universal_offers_updated_at BEFORE UPDATE ON universal_offers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
