export const up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    email: {
      type: 'TEXT',
      notNull: true,
    },
    verified_at: {
      type: 'TIMESTAMP',
    },
  });
};

export const down = (pgm) => {
  pgm.dropTable('users');
};
