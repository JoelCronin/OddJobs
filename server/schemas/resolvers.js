const { Posting, User, Rating } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    posting: async () => {

      const posting = await Posting.find().populate('owner').populate('chosenWorker').populate('applications');

      return posting;
    },
    singlePosting: async (parent, args) => {
      const posting = await Posting.findById(args.id).populate('owner').populate('chosenWorker').populate('applications');
      return posting;
    },
    me: async (parent, args) => {
      // if (context.user) {
        return User.findById(args.id).populate('jobApplications').populate('activeJobs').populate('completedJobs').populate('owner').populate('ratings');
      // throw new AuthenticationError('You need to be logged in!');
    },
    singleUser: async (parent, args) => {
      //populate owner for jobApplications
      const user = await User.findById(args.id).populate('jobApplications').populate('activeJobs').populate('completedJobs');
      return user;
    },
    allUsers: async () => {
      const users = await User.find().populate('jobApplications').populate('activeJobs').populate('completedJobs').populate('ratings');
      return users;
    },
    sigleRating: async (parent, args) => {
      const rating = await Rating.findById(args.id).populate('byUser').populate('forUser');
      return rating;
    }    
  },

  Mutation: {
    createPosting: async (parent, args, context) => {
      // if (context.user) {
        const posting = await Posting.create({
          ...args.input,
          userId: context.user._id
        });
        return posting;
      // }
      throw new AuthenticationError('You need to be logged in!');
    },

    createUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Invalid credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    createRating: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        const rating = await Rating.create({
          ...args.input,
          userId: context.user._id
        });
        return rating;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removePosting: async (parent, args, context) => {
      if (context.user) {
        const posting = await Posting.findByIdAndRemove(args.id);
        return posting;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updatePosting: async (parent, args, context) => {
      // if (context.user) {
        const posting = await Posting.findByIdAndUpdate(args.id, args.input);
        return posting;
      // }
      throw new AuthenticationError('You need to be logged in!');
    },    
  },
};


module.exports = resolvers;