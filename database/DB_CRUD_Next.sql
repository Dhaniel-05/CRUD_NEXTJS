CREATE DATABASE nextmysqlcrud;

Use nextmysqlcrud;

CREATE TABLE product(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- la palabra clave UNSIGNED se utiliza para especificar que una columna numérica solo puede contener valores no negativos. Esto significa que al definir un campo como UNSIGNED, no podrá almacenar valores negativos.
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200),
    price DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM product;