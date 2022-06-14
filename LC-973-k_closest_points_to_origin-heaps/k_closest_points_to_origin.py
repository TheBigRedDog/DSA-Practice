import heapq
class Solution:
    
    def kClosest(self, points: list, k: int) -> list:
        
        def distance_to_origin(points):
            distance = (points[0]**2 + points[1]**2)**(1/2)
            return distance
        
        max_heap = []
        
        for point in points:
            distance = distance_to_origin(point)
            
            if len(max_heap) >= k:
                kth_greatest_distance = -max_heap[0][0]
                if distance < kth_greatest_distance:
                    heapq.heappop(max_heap)
                    heapq.heappush(max_heap, (-distance, point))
            else:
                heapq.heappush(max_heap, (-distance, point))
            
        
        ans = [x[1] for x in max_heap]
        return ans