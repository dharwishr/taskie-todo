class User < ApplicationRecord
    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
    MAX_NAME_LENGTH = 255
    MAX_EMAIL_LENGTH = 255
    MIN_PASSWORD_LENGTH = 6

    has_secure_password
    has_many :tasks

    validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
    validates :email, presence: true,
    uniqueness: { case_sensitive: false },
    length: { maximum: MAX_EMAIL_LENGTH },
    format: { with: VALID_EMAIL_REGEX }
    validates :password, length: { minimum: MIN_PASSWORD_LENGTH }, if: -> { password.present? }
    validates :password_confirmation, presence: true, on: :create
end
