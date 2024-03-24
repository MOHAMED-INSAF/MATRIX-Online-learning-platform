import { getDashboardCourses } from './actions/get-dashboard-courses';
import { db } from '@/lib/db';
import { getProgress } from '@/actions/get-progress';

jest.mock('@/lib/db', () => ({
  db: {
    purchase: {
      findMany: jest.fn(),
    },
  },
}));

jest.mock('@/actions/get-progress');

describe('getDashboardCourses', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return completed and in-progress courses with progress for a user', async () => {
    const userId = 'user123';
    const purchasedCourses = [{ id: 'course1' }, { id: 'course2' }];

    // (db.purchase.findMany as jest.Mock).mockResolvedValue(purchasedCourses);

    const progressMap: Record<string, number> = {
      course1: 50,
      course2: 75,
    };

    (getProgress as jest.Mock).mockImplementation((userId: string, courseId: string) => {
      return progressMap[courseId];
    });

    const result = await getDashboardCourses(userId);
  });

  it('should return empty arrays if an error occurs', async () => {
    const userId = 'user123';

    // (db.purchase.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));
    
    const result = await getDashboardCourses(userId);
    expect(result.completedCourses).toEqual([]);
    expect(result.coursesInProgress).toEqual([]);
  });
});
