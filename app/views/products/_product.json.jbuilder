json.extract! product, :id, :sku, :name, :details, :price, :status, :created_at, :updated_at
json.url product_url(product, format: :json)
