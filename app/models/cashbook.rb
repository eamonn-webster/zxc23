# frozen_string_literal: true

class Cashbook < ApplicationRecord
  Cashbook.inheritance_column = :cashbook_type
  has_many :transactions
end
