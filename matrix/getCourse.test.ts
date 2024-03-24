import { getCourses } from './actions/get-courses';
import { db } from './lib/db';

jest.mock('@/lib/db', () => ({
  db: {
    course: {
      findMany: jest.fn(), 
    },
    purchase: {
      findMany: jest.fn(), 
    },
  },
}));

jest.mock('@/actions/get-progress', () => ({

  __esModule: true,
  getProgress: jest.fn().mockResolvedValue(50), 
}));

describe('getCourses', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return courses with progress when courses are found', async () => {
    
    const userId = 'user123';
    const title = 'example';
    const categoryId = 'category123';

   
    const mockedCourses = [
      {
        id: 'course1',
        title: 'Course 1',
        category: { id: 'category1', name: 'Category 1' },
        chapters: [{ id: 'chapter1' }, { id: 'chapter2' }],
        purchases: [{ userId: 'user123', courseId: 'course1' }],
      },
    ];

   
    (db.course.findMany as jest.Mock).mockResolvedValue(mockedCourses);

   
    const result = await getCourses({ userId, title, categoryId });


    expect(result).toHaveLength(mockedCourses.length);
    expect(result[0].title).toBe('Course 1');
    expect(result[0].category).toEqual({ id: 'category1', name: 'Category 1' });
    expect(result[0].chapters).toHaveLength(2);
    expect(result[0].progress).toBe(50); 
    
  });
});
