const { Comment, Like, Post, Profile, User } = require("./index");
const db  = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    
   
    test('should create a new User', async () => {
        const user = await User.create({ username: 'testuser', email: 'test@example.com' });
        expect(user).toBeDefined();
        expect(user.username).toBe('testuser');
        expect(user.email).toBe('test@example.com');
      });
    
      // Test for profile creation
      test('should create a new Profile for the User', async () => {
        const user = await User.create({ username: 'testuser2', email: 'test2@example.com' });
        const profile = await Profile.create({ bio: 'This is a test bio', userId: user.id });
        expect(profile).toBeDefined();
        expect(profile.bio).toBe('This is a test bio');
        
      });
    
      // Test for post creation
      test('should create a new Post for the User', async () => {
        const user = await User.create({ username: 'testuser3', email: 'test3@example.com' });
        const post = await Post.create({ title: 'Test Post', content: 'This is a test post', userId: user.id });
        expect(post).toBeDefined();
        expect(post.title).toBe('Test Post');
        expect(post.content).toBe('This is a test post');
        expect(post.userId).toBe(user.id);
      });
    
      // Test for comment creation
      test('should create a new Comment for the Post', async () => {
        const user = await User.create({ username: 'testuser4', email: 'test4@example.com' });
        const post = await Post.create({ title: 'Test Post 2', content: 'This is another test post', userId: user.id });
        const comment = await Comment.create({ content: 'This is a test comment', postId: post.id });
        expect(comment).toBeDefined();
        expect(comment.content).toBe('This is a test comment');
        expect(comment.postId).toBe(post.id);
      });




})