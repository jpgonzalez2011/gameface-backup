# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

User.create!(
  username: "mario", password: "password",
  fname: "Mario", lname: "Mario", date_of_birth: "09/07/1981",
  occupation: "Plumber", description: "It's a me! Mario! Plumber and Hero of
  the Mushroom Kingdom!"
)
User.create!(
  username: "luigi", password: "luigimansion",
  fname: "Luigi", lname: "Mario", date_of_birth: "14/7/1983"
)
User.create!(
  username: "link", password: "ocarina",
  fname: "Link", lname: "", date_of_birth: "21/2/1986"
)
User.create!(
  username: "zelda", password: "hyrule",
  fname: "Princess", lname: "Zelda", date_of_birth: "21/2/1986"
)
User.create!(
  username: "bowser", password: "koopas",
  fname: "Bowser", lname: "Koopa", date_of_birth: "13/9/1985"
)
User.create!(
  username: "ganondorf", password: "triforce",
  fname: "Ganondorf", lname: "Dragmire", date_of_birth: "21/11/1998"
)
User.create!(
  username: "solidsnake", password: "metalgear",
  fname: "Iroquois", lname: "Pliskin", date_of_birth: "07/07/1987"
)
User.create!(
  username: "peach", password: "toadstool",
  fname: "Peach", lname: "Toadstool", date_of_birth: "13/9/1985"
)
User.create!(
  username: "toad", password: "supertoad",
  fname: "Toad", lname: "", date_of_birth: "9/10/1988"
)
User.create!(
  username: "ryu", password: "hadouken",
  fname: "Ryu", lname: "Hoshi", date_of_birth: "30/8/1987"
)
User.create!(
  username: "ken", password: "shoryuken",
  fname: "Ken", lname: "Masters", date_of_birth: "09/07/1981"
)
User.create!(
  username: "kirby", password: "password",
  fname: "Kirby", lname: "", date_of_birth: "27/4/1992"
)
User.create!(
  username: "samus", password: "shoryuken",
  fname: "Samus", lname: "Aran", date_of_birth: "6/8/1988"
)
User.create!(
  username: "pacman", password: "password",
  fname: "Pacman", lname: "", date_of_birth: "22/5/1980"
)
User.create!(
  username: "mspacman", password: "password",
  fname: "Ms. Pacman", lname: "", date_of_birth: "13/1/1982"
)
User.create!(
  username: "boo", password: "password",
  fname: "Boo", lname: "", date_of_birth: "23/10/1988"
)
User.create!(
  username: "yoshi", password: "password",
  fname: "Yoshi", lname: "", date_of_birth: "21/11/1991"
)
User.create!(
  username: "bigboo", password: "password",
  fname: "Big", lname: "Boo", date_of_birth: "23/10/1988"
)
User.create!(
  username: "kingboo", password: "password",
  fname: "King", lname: "Boo", date_of_birth: "14/9/2001"
)
User.create!(
  username: "frogger", password: "password",
  fname: "Frogger", lname: "", date_of_birth: "5/6/1981"
)
User.create!(
  username: "tetrisline", password: "password",
  fname: "Line", lname: "", date_of_birth: "6/6/1984"
)
User.create!(
  username: "laracroft", password: "password",
  fname: "Lara", lname: "Croft", date_of_birth: "25/10/1996"
)

CoverPhoto.destroy_all
ProfilePicture.destroy_all

CoverPhoto.create!(user_id: User.find_by(username: "mario").id, image: File.new("#{Rails.root}/app/assets/images/mario.png"))
ProfilePicture.create!(user_id: User.find_by(username: "mario").id, image: File.new("#{Rails.root}/app/assets/images/mario.jpg"))
ProfilePicture.create!(user_id: User.find_by(username: "luigi").id, image: File.new("#{Rails.root}/app/assets/images/200px-Luigi_Artwork_-_Super_Mario_3D_World.png"))
