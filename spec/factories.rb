FactoryGirl.define do
  factory :opinion do
    
  end
  factory :user do
    username { Faker::name.name }
  end
end
