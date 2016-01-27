# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

User.create!(
  username: "Mario", password: "password",
  fname: "Mario", lname: "Mario", date_of_birth: "09/07/1981",
  cover_photo: "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"
)
User.create!(
  username: "Luigi", password: "luigimansion",
  fname: "Luigi", lname: "Mario", date_of_birth: "14/7/1983"
)
User.create!(
  username: "Link", password: "ocarina",
  fname: "Link", lname: "", date_of_birth: "21/2/1986"
)
User.create!(
  username: "Zelda", password: "hyrule",
  fname: "Princess", lname: "Zelda", date_of_birth: "21/2/1986"
)
User.create!(
  username: "Bowser", password: "koopas",
  fname: "Bowser", lname: "Koopa", date_of_birth: "13/9/1985"
)
User.create!(
  username: "Ganondorf", password: "triforce",
  fname: "Ganondorf", lname: "Dragmire", date_of_birth: "21/11/1998"
)
User.create!(
  username: "SolidSnake", password: "metalgear",
  fname: "Iroquois", lname: "Pliskin", date_of_birth: "07/07/1987"
)
User.create!(
  username: "Peach", password: "toadstool",
  fname: "Peach", lname: "Toadstool", date_of_birth: "13/9/1985"
)
User.create!(
  username: "Toad", password: "supertoad",
  fname: "Toad", lname: "", date_of_birth: "9/10/1988"
)
User.create!(
  username: "Ryu", password: "hadouken",
  fname: "Ryu", lname: "Hoshi", date_of_birth: "30/8/1987"
)
User.create!(
  username: "Ken", password: "shoryuken",
  fname: "Ken", lname: "Masters", date_of_birth: "09/07/1981"
)
