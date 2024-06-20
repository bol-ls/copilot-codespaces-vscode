function skillsMember() {
      return {
    title: 'Skills Member',
    description: 'Member Skills',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'uuid'
      },
      skill: {
        type: 'string',
        description: 'Skill name'
      },
      level: {
        type: 'string',
        description: 'Skill level'
      }
    },
    required: ['id', 'skill', 'level']
  };
}