const { Posting, User, Rating } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    posting: async (parent, { username }) => {
      if (username) {
        return await Posting.find({ user: username });
      } else {
        return await Posting.find();
      }      
    },
    singlePosting: async (parent, args) => {
      const posting = await Posting.findById(args.id);
      return posting;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Posting.findAll({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    singleUser: async (parent, args) => {
      const user = await User.findById(args.id);
      return user;
    }    
  },

  Mutation: {
    createPosting: async (parent, args, context) => {
      if (context.user) {
        const posting = await Posting.create({
          ...args.input,
          userId: context.user._id
        });
        return posting;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    createUser: async (parent, args) => {
      const user = await User.create({
        ...args.input
      });
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
      if (context.user) {
        const posting = await Posting.findByIdAndUpdate(args.id, args.input);
        return posting;
      }
      throw new AuthenticationError('You need to be logged in!');
    },    
  },
};


module.exports = resolvers;