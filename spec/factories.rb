FactoryGirl.define do
  factory :annotation do
    
  end
  factory :court do
    
  end
  factory :judge do
    
  end
  factory :opinion do
    
  end
  factory :user do
    username { Faker::name.name }
  end
end
