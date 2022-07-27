import { Posting, User, Rating } from '../models';

const resolvers = {
  Query: {
    posting: async () => {
      const posting = await Posting.find();
      return posting;
    },
    
  },

  Mutation: {

  },
};


module.exports = resolvers;