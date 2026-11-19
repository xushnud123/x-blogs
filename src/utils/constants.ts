import { skillGroups } from './portfolio';

export const skillsData = skillGroups.flatMap((group) => group.items);
