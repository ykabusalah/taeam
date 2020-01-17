#ifndef STACK_BASE_CPP
#define STACK_BASE_CPP

#include "StackBase.h"

/**
 * Returns true if this stack is empty.
 *
 * @return bool - true if stack is empty
 */
template <typename T> bool StackBase<T>::isEmpty() const noexcept
{
    return size() == 0;
}

/**
 * Returns a reference to the top of the stack. Throws std::underflow_error if this
 * stack is empty.
 *
 * @return value at top of stack
 */
template <typename T> T& StackBase<T>::top()
{
    return const_cast<T&>(static_cast<const StackBase<T>*>(this)->top());
}

#endif