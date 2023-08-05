const User = require('./user-model');

// Create a new user
async function createUser(username, email, age) {
  try {
    const newUser = await User.create({ username, email, age });
    console.log('New user created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

// Find a user by email
async function findUserByEmail(email) {
  try {
    const user = await User.findOne({ email });
    console.log('User found:', user);
  } catch (error) {
    console.error('Error finding user:', error.message);
  }
}

// Update user by email
async function updateUserByEmail(email, newAge) {
  try {
    const updatedUser = await User.findOneAndUpdate({ email }, { age: newAge }, { new: true });
    console.log('User updated:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
}

// Delete user by email
async function deleteUserByEmail(email) {
  try {
    const deletedUser = await User.findOneAndDelete({ email });
    console.log('User deleted:', deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
}

// Usage examples
createUser('JohnDoe', 'john.doe@example.com', 30);
findUserByEmail('john.doe@example.com');
updateUserByEmail('john.doe@example.com', 31);
deleteUserByEmail('john.doe@example.com');
