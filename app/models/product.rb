class Product < ApplicationRecord
  enum status: [ :instock, :outofstock ]
end
