import { getAnalytics } from './actions/get-analytics';
import { db } from '@/lib/db';

jest.mock('@/lib/db', () => ({
  db: {
    purchase: {
      findMany: jest.fn(),
    },
  },
}));

describe('getAnalytics', () => {
  it('returns analytics data correctly', async () => {
    const userId = 'user123';
    const mockPurchases = [
      {
        id: 1,
        course: {
          title: 'Course 1',
          price: 50,
        },
      },
      {
        id: 2,
        course: {
          title: 'Course 2',
          price: 75,
        },
      },
    ];

    (db.purchase.findMany as jest.Mock).mockResolvedValue(mockPurchases);
    const expectedData = [
      { name: 'Course 1', total: 50 },
      { name: 'Course 2', total: 75 },
    ];
    const expectedTotalRevenue = 125; 
    const expectedTotalSales = mockPurchases.length;
    const analytics = await getAnalytics(userId);

    expect(analytics.data).toEqual(expectedData);
    expect(analytics.totalRevenue).toBe(expectedTotalRevenue);
    expect(analytics.totalSales).toBe(expectedTotalSales);
  });


});
