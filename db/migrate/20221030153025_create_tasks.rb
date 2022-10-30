class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks, id: :uuid, default: -> { "gen_random_uuid()" } do |t|
      t.string :title, null: false
      t.datetime :duedate, null: false
      t.boolean :completed, default: false
      t.timestamps
    end
  end
end
