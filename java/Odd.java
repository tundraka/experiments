import java.util.Arrays;

public class Odd {
    public static void main(String[] args) {
        int[][] array = {
            {1, 2, 2, 3, 3},
            {1, 1, 2, 3, 3},
            {1, 1, 2, 2, 3},
        };

        for (int i = 0; i < array.length; i ++) {
            System.out.println(findOdd(array[i]));
        }
    }

    private static int findOdd(int[] A) {
        int previous = 0;

        Arrays.sort(A);

        for (int i = 0; i < A.length; i ++) {
            if (previous == 0) {
                previous = A[i];
                continue;
            }

            if (A[i] != previous) {
                break;
            }

            previous = 0;
        }

        return previous;
    }
}
