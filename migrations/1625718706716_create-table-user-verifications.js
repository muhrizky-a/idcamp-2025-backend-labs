export const up = (pgm) => {
  pgm.createTable('user_verifications', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    token: {
      type: 'TEXT',
      notNull: true,
    },
    used_at: {
      type: 'TIMESTAMP',
    },
    expired_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func("current_timestamp + interval '5 minutes'"),
    },
  });
};

export const down = (pgm) => {
  pgm.dropTable('user_verifications');
};
