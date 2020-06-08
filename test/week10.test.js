const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("throws error if not passed an argument", () => {
        expect(() => sumDigits()).toThrow("n is required");
    });
    test("throws error if not passed a number", () => {
        expect(() => sumDigits("string")).toThrow("n must have type number");
        expect(() => sumDigits(["arr"])).toThrow("n must have type number");
        expect(() => sumDigits({ number: 123 })).toThrow("n must have type number");
        expect(() => sumDigits(true)).toThrow("n must have type number");
    });
    test("throws error if not passed a positive integer", () => {
        expect(() => sumDigits(-6)).toThrow("n must be a positive integer");
        expect(() => sumDigits(2.5)).toThrow("n must be a positive integer");
    });
    test("returns sum of digits when passed number", () => {
        expect(sumDigits(123)).toBe(6);
    });
    test("returns 0 when passed 0", () => {
        expect(sumDigits(0)).toBe(0);
    });
});

describe("createRange", () => {
    test("throws error if not passed a start value", () => {
        expect(() => createRange(undefined, 6)).toThrow("start is required");
    });
    test("throws error if not passed an end value", () => {
        expect(() => createRange(5, undefined)).toThrow("end is required");
    });
    test("throws error if steps from start value would not include end value", () => {
        expect(() => createRange(2, 5, 2)).toThrow("cannot reach end value from start value");
    });
    test("produces array of values in range when not provided a step value", () => {
        expect(createRange(2, 5)).toEqual([2, 3, 4, 5]);
    });
    test("produces array of values in range when provided a step value", () => {
        expect(createRange(2, 6, 2)).toEqual([2, 4, 6]);
    });
})

describe("getScreentimeAlertList", () => {
    const testDate = "2019-05-02";
    const testDate2 = "2019-05-04";
    const testDate3 = "2019-06-11";
    const testUsers = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                { date: "2019-05-04", usage: { mapMyRun: 20, whatsApp: 20, facebook: 50, safari: 31 } },
            ]
        }
    ];

    test("throws error if not passed input users", () => {
        expect(() => getScreentimeAlertList(undefined, testDate)).toThrow("users is required");
    });
    test("throws error if users is not an array", () => {
        const singleUser = {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        };
        expect(() => getScreentimeAlertList(6, testDate)).toThrow("input users must be an array");
        expect(() => getScreentimeAlertList("users", testDate)).toThrow("input users must be an array");
        expect(() => getScreentimeAlertList(true, testDate)).toThrow("input users must be an array");
        expect(() => getScreentimeAlertList(singleUser, testDate)).toThrow("input users must be an array");
    });
    test("throws error if user object is not of form {username: , name: , screenTime: }", () => {
        const incorrectUsers = [
            {
                username: "beth_1234",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            }
        ];
        expect(() => getScreentimeAlertList(incorrectUsers, testDate)).toThrow("each user object must be of the form {username: , name: , screenTime: }");
    });
    test("throws error if user object value of screentime is not of form {date: , usage: {twitter: , instagram: , facebook: }}", () => {
        const incorrectScreenTime = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02" },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            }
        ];
        expect(() => getScreentimeAlertList(incorrectScreenTime, testDate)).toThrow("each user object value of screentime must be of form {date: , usage: }");
    });
    test("throws error if not passed input date", () => {
        expect(() => getScreentimeAlertList(testUsers, undefined)).toThrow("date is required");
    });
    test("throws error if date is not a string", () => {
        expect(() => getScreentimeAlertList(testUsers, 5)).toThrow("input date must be a string");
        expect(() => getScreentimeAlertList(testUsers, true)).toThrow("input date must be a string");
        expect(() => getScreentimeAlertList(testUsers, {})).toThrow("input date must be a string");
        expect(() => getScreentimeAlertList(testUsers, [])).toThrow("input date must be a string");
    });
    test("throws error if date is not valid", () => {
        expect(() => getScreentimeAlertList(testUsers, "06-05-2020")).toThrow("input date must a valid date in format yyyy-mm-dd");
        expect(() => getScreentimeAlertList(testUsers, "2020-13-01")).toThrow("input date must a valid date in format yyyy-mm-dd");
        expect(() => getScreentimeAlertList(testUsers, "2019-02-29")).toThrow("input date must a valid date in format yyyy-mm-dd");
    });
    test("returns array of single users with screen time over 100 mins on given date", () => {
        expect(getScreentimeAlertList(testUsers, testDate)).toEqual(["beth_1234"]);
    });
    test("returns array of multiple users with screen time over 100 mins on given date", () => {
        expect(getScreentimeAlertList(testUsers, testDate2)).toEqual(["beth_1234", "sam_j_1989"]);
    });
    test("returns empty array when screen time is 100 mins or less", () => {
        expect(getScreentimeAlertList(testUsers, testDate3)).toEqual([]);
    });




    // if (typeof date !== "string") throw new Error("input date must be a string");
    // test("throws error if steps from start value would not include end value", () => {
    //     expect(() => createRange(2,5,2)).toThrow("cannot reach end value from start value");
    // });
    // test("produces array of values in range when not provided a step value", () => {
    //     expect(createRange(2,5)).toEqual([2,3,4,5]);
    // });
    // test("produces array of values in range when provided a step value", () => {
    //     expect(createRange(2,6,2)).toEqual([2,4,6]);
    // });
})