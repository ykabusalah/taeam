#ifndef QUEUE_BASE_CPP
#define QUEUE_BASE_CPP

/**
 * Returns a reference to the front of this queue. Throws std::underflow_error if this
 * queue is empty.
 *
 * @return the next value from the queue
 */
template <typename T> T& QueueBase<T>::front()
{
    return const_cast<T&>(static_cast<const QueueBase<T>*>(this)->front());
}

/**
 * Returns true if this queue is empty.
 *
 * @return boolean if the queue is empty
 */
template <typename T> bool QueueBase<T>::isEmpty() const noexcept
{
    return size() == 0;
}

#endif