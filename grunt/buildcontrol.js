module.exports = {
  options: {
    dir: 'dist',
    commit: true,
    push: true,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
    connectCommits: false,
  },
  pages: {
    options: {
      remote: 'https://github.com/codexplain/codexplain.io.git',
      branch: 'gh-pages',
    },
  },
};
