#ifndef QUEUE_ADAPTER_CPP
#define QUEUE_ADAPTER_CPP

/**
 * Removes the front element from this queue. Throws std::underflow_error if this queue
 * is empty.
 */
template <typename Container> void QueueAdapter<Container>::dequeue()
{
    if (mContainer.size() == 0) {
        throw std::underflow_error("dequeue(): queue is empty.");
    }
    mContainer.remove(0);
}

/**
 * Adds value to the end of this queue.
 *
 * @param value value to push onto the queue
 */
template <typename Container> void QueueAdapter<Container>::enqueue(const value_type& value)
{
    mContainer.add(value);
}

/**
 * Returns a reference to the front of this queue. Throws std::underflow_error if this
 * queue is empty.
 *
 * @return value from the front of the queue
 */
template <typename Container>
const typename Container::value_type& QueueAdapter<Container>::front() const
{
    if (mContainer.size() == 0) {
        throw std::underflow_error("front(): queue is empty.");
    }

    return mContainer.get(0);
}

/**
 * Returns the size of this queue.
 *
 * @return number of values in the queue
 */
template <typename Container> uint32_t QueueAdapter<Container>::size() const noexcept
{
    return mContainer.size();
}

#endif