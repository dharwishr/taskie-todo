class AddUserRefToTasks < ActiveRecord::Migration[7.0]
  def change
    add_reference :tasks, :user, null: false, foreign_key: {on_delete: :cascade}, type: :uuid
  end
end
