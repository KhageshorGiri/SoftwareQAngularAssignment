
export interface UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    isAdmin: boolean;
    department: 'Marketing' | 'Management' | 'Maintenance';
  }
  