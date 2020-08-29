import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
// import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(transaction_id: string): Promise<void> {
    const transactionsRepository = getRepository(Transaction);

    await transactionsRepository.delete(transaction_id);
  }
}

export default DeleteTransactionService;
