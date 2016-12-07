FactoryGirl.define do
  factory :user do
    username { Faker::name.name }
  end
end
