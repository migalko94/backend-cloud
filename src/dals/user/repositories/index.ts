import { mockRepository } from "./user.mock.repository.js";
import { dbRepository } from "./user.db.repository.js";
import { envConstants } from "#core/constants/env.constants.js";

export const userRepository = envConstants.isApiMock
  ? mockRepository
  : dbRepository;
