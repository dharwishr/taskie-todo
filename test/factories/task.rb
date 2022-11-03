FactoryBot.define do
    factory :task do
      association :user_id, factory: :user
      title { Faker::Lorem.sentence[0..49] }
      duedate {Faker::Time.between(from: 300.days.ago, to: Time.now)}
      completed {Faker::Boolean.boolean}
    end
  end