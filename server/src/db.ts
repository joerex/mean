import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');
export const db = mongoose.connection;