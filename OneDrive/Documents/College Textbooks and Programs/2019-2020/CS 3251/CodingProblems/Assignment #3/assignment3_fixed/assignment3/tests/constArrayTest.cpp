// @author G. Hemingway, copyright 2018 - All rights reserved
//
#include "ArrayList.h"
#include <gtest/gtest.h>

namespace {
// The fixture for testing ConstArrayListIterator.
class ConstArrayListIteratorTest : public ::testing::Test {
};

TEST_F(ConstArrayListIteratorTest, Test1)
{
    const ArrayList<int> a(20, 17);
    ArrayList<int>::const_iterator i = a.begin();
    ArrayList<int>::const_iterator j = a.begin();
    EXPECT_TRUE(i == j);
    EXPECT_FALSE(i != j);
    EXPECT_EQ(*i, *j);
}

TEST_F(ConstArrayListIteratorTest, Test2)
{
    const ArrayList<int> a(20, 17);
    ArrayList<int>::const_iterator i = a.begin();
    EXPECT_EQ(*i, 17);
    // The next statement should not compile
    //*i = 2;

}

TEST_F(ConstArrayListIteratorTest, Test3)
{
    const ArrayList<std::string> a(20, "Test");
    for (ArrayList<std::string>::const_iterator i = a.begin(); i != a.end(); ++i) {
        EXPECT_EQ(i->length(), 4U);
    }
}

TEST_F(ConstArrayListIteratorTest, Test4)
{
    const ArrayList<std::string> a(21, "Test");
    ArrayList<std::string>::const_iterator i = a.begin();
    EXPECT_EQ(i->length(), 4U);
    ArrayList<std::string>::const_iterator check = 3 + i;
    i += 3;
    EXPECT_EQ(check, i);
}

TEST_F(ConstArrayListIteratorTest, Test5)
{
    const ArrayList<std::string> a(10, "Test a decrement");
    ArrayList<std::string>::const_iterator i = a.begin();
    EXPECT_EQ(i->length(), 16U);
    ArrayList<std::string>::const_iterator check = 3 + i;
    check -= 3;
    EXPECT_EQ(check, i);
}

TEST_F(ConstArrayListIteratorTest, Test6)
{
    const ArrayList<int> a(20, 17);
    ArrayList<int>::const_iterator i = a.begin();
    ArrayList<int>::const_iterator j = a.begin();
    i++;
    EXPECT_FALSE(i == j);
    i--;
    EXPECT_TRUE(i == j);
    ++i;
    EXPECT_FALSE(i == j);
    --i;
    EXPECT_TRUE(i == j);
    i = i + 2;
    EXPECT_FALSE(i == j);
    i = i - 2;
    EXPECT_TRUE(i == j);
    i += 2;
    EXPECT_FALSE(i == j);
    i -= 2;
    EXPECT_TRUE(i == j);
    EXPECT_EQ(a[2], 17);
}

TEST_F(ConstArrayListIteratorTest, Test7)
{
    // Test for operator+ and operator-
    const ArrayList<int> a(20, 17);
    ArrayList<int>::const_iterator begin = a.begin();
    ArrayList<int>::const_iterator end = a.end();
    EXPECT_EQ(end - begin, 20);
    ArrayList<int>::const_iterator middle = begin + 10;
    EXPECT_EQ(end - middle, 10);
}

TEST_F(ConstArrayListIteratorTest, Test8)
{
    // test for end()
    const ArrayList<int> a(20, 17);
    ArrayList<int>::const_iterator i = a.begin();
    uint32_t count = 0;
    for (; i != a.end(); ++i) {
        count++;
        EXPECT_EQ(*i, 17);
    }
    EXPECT_EQ(count, 20UL);
}

}
