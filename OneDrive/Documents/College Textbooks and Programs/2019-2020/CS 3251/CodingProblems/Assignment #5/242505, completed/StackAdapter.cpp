#ifndef STACK_ADAPTER_CPP
#define STACK_ADAPTER_CPP

#include "StackAdapter.h"

/**
 * Removes the top element from the stack. Throws std::underflow_error if this stack
 * is empty.
 */
template <typename Container> void StackAdapter<Container>::pop()
{
    if (mContainer.size() == 0) {
        throw std::underflow_error("pop(): stack is empty.");
    }
    mContainer.remove(size() - 1);
}

/**
 * Adds value to the top of the stack.
 *
 * @param value the value to add to the stack
 */
template <typename Container> void StackAdapter<Container>::push(const value_type& value)
{
    mContainer.add(value);
}

/**
 * Returns the size of this stack.
 *
 * @return the number of elements in the stack
 */
template <typename Container> uint32_t StackAdapter<Container>::size() const noexcept
{
    return mContainer.size();
}

/**
 * Returns a reference to the top of the stack. Throws std::underflow_error if this
 * stack is empty.
 *
 * @return the top-most value in the stack
 */
template <typename Container>
const typename Container::value_type& StackAdapter<Container>::top() const
{
    if (mContainer.size() == 0) {
        throw std::underflow_error("top(): stack is empty.");
    }
    return mContainer.get(size() - 1);
}

#endif