CREATE TABLE supplier_categories (
    supplier_category_id INT PRIMARY KEY,
    supplier_category_name VARCHAR(255)
);

CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY,
    supplier_name VARCHAR(255),
    address TEXT,
    phone VARCHAR(50),
    email VARCHAR(255),
    supplier_category_id INT,
    FOREIGN KEY (supplier_category_id) REFERENCES supplier_categories(supplier_category_id)
);

CREATE TABLE payment_types (
    payment_type_id INT PRIMARY KEY,
    payment_type_name VARCHAR(255)
);

CREATE TABLE raw_materials (
    material_id INT PRIMARY KEY,
    material_name VARCHAR(255),
    category VARCHAR(255),
    unit VARCHAR(50)
);

CREATE TABLE raw_material_stock_movements (
    movement_id INT PRIMARY KEY,
    material_id INT,
    stock_in DECIMAL(10, 2),
    stock_out DECIMAL(10, 2),
    movement_date DATE,
    reference_note TEXT,
    FOREIGN KEY (material_id) REFERENCES raw_materials(material_id)
);

CREATE TABLE product_stock_movements (
    movement_id INT PRIMARY KEY,
    product_id INT,
    stock_in DECIMAL(10, 2),
    stock_out DECIMAL(10, 2),
    movement_date DATE,
    reference_note TEXT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255)
);

CREATE TABLE customer_address (
    address_id INT PRIMARY KEY,
    customer_id INT,
    address TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE customer_auth (
    customer_id INT PRIMARY KEY,
    password_hash VARCHAR(255),
    password_salt VARCHAR(255),
    is_active BOOLEAN,
    last_login DATETIME,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE customer_sessions (
    session_id INT PRIMARY KEY,
    customer_id INT,
    device_info TEXT,
    ip_address VARCHAR(50),
    login_time DATETIME,
    logout_time DATETIME,
    created_at DATETIME,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE password_resets (
    reset_id INT PRIMARY KEY,
    customer_id INT,
    reset_token VARCHAR(255),
    created_at DATETIME,
    expires_at DATETIME,
    used BOOLEAN,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE sales_orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    status VARCHAR(50),
    total_amount DECIMAL(10, 2),
    payment_type_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (payment_type_id) REFERENCES payment_types(payment_type_id)
);

CREATE TABLE sales_order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    price DECIMAL(10, 2),
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES sales_orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE supplier_payments (
    payment_id INT PRIMARY KEY,
    supplier_id INT,
    amount DECIMAL(10, 2),
    date DATE,
    notes TEXT,
    payment_type_id INT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id),
    FOREIGN KEY (payment_type_id) REFERENCES payment_types(payment_type_id)
);

 