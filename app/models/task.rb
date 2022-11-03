class Task < ApplicationRecord
    MAX_TITLE_LENGTH = 125

    belongs_to :user

    validates :title, presence: true, length: { maximum: MAX_TITLE_LENGTH }
    validates :duedate, presence: true
end
