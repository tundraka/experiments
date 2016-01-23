public class Binary {
    private static char ONE = '1';
    private static char ZERO = '0';

    public static void main(String[] args) {
        //Integer[] number = {9, 529, 20, 15, 1041};
        Integer[] number = {1376796946, 561892, 74901729};

        for (int i = 0; i < number.length; i ++) {
            int gap = determineGap(number[i]);
            System.out.println(" the biggest gap is " + gap);
        }
    }

    private static int determineGap(Integer N) {
        String ones = Integer.toBinaryString(N);
        int currentGap = 0;
        int biggestGap = 0;

        System.out.print(N + "=" + ones);

        for (int i = 0; i < ones.length(); i ++) {
            if (ONE == ones.charAt(i)) {
                if (currentGap > biggestGap) {
                    biggestGap = currentGap;
                }
                currentGap = 0;

                continue;
            }

            currentGap ++;
        }
        
        return biggestGap;
    }
}
