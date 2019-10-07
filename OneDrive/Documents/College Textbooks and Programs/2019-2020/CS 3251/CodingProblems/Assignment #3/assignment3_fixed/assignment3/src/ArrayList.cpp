//
//
#ifndef ARRAYLIST_CPP
#define ARRAYLIST_CPP
#include <string> // to_string()

template <typename T>
ArrayList<T>::ArrayList() {
    mCapacity = 0;
    mSize = 0;
    T *buffer;
    buffer = new T[mCapacity + 1]; // dummy end node
    mArray.reset(buffer);
}

template <typename T>
ArrayList<T>::ArrayList(const uint32_t& size, const T& value) {
    mSize = size;
    mCapacity = mSize;
    T *buffer;
    buffer = new T[mCapacity + 1];
    mArray.reset(buffer);
    // initialize array with default value
    for (uint32_t i = 0; i < size; i++) {
        mArray[i] = value;
    }
}

template <typename T>
ArrayList<T>::ArrayList(const ArrayList<T>& src) {
    mSize = src.mSize;
    mCapacity = src.mCapacity;
    T *buffer;
    buffer = new T[mCapacity + 1];
    mArray.reset(buffer);
    // initialize array with values of src
    for (uint32_t i = 0; i < mSize; i++) {
        mArray[i] = src.mArray[i];
    }
}

template <typename T>
ArrayList<T>& ArrayList<T>::operator=(const ArrayList<T>& src) {
    if (this != &src) {
        // clear all current items from this array list
        mSize = src.mSize;
        mCapacity = src.mCapacity;
        T * buffer;
        buffer = new T[mCapacity + 1];
        mArray.reset(buffer);

        // initialize array with values of src
        for (uint32_t i = 0; i < mSize; i++) {
            mArray[i] = src.mArray[i];
        }
    }
    return *this;
}

template <typename T>
const uint32_t& ArrayList<T>::add(const T& value) {
    if (mCapacity == 0) {
        mCapacity = 1;
        T* newBuffer = new T[mCapacity + 1];
        mArray.reset(newBuffer);
    } else if (mSize == mCapacity) {
        // double the capacity from the current capacity
        mCapacity *= 2;
        T* newBuffer = new T[mCapacity + 1];
        // copy old values to new allocated buffer
        for (uint32_t i = 0; i < mSize; i++) {
            newBuffer[i] = mArray[i];
        }
        mArray.reset(newBuffer);
    }
    // insert new value to the array
    mArray[mSize] = value;
    mSize++;
    return mCapacity;
}

template <typename T>
const uint32_t& ArrayList<T>::add(const uint32_t& index, const T& value) {
    // Check if we have to insert new value before existent item
    if (index < mSize) {
        // Check if if have to enlarge capacity
        if (mCapacity == 0) {
            mCapacity = 1;
            T* newBuffer = new T[mCapacity + 1];
            mArray.reset(newBuffer);
        } else if (mSize == mCapacity) {
            // double the capacity from the current capacity
            mCapacity *= 2;
            T* newBuffer = new T[mCapacity + 1];
            // copy old values to new allocated buffer
            for (uint32_t i = 0; i < mSize; i++) {
                newBuffer[i] = mArray[i];
            }
            mArray.reset(newBuffer);
        }
        // shift all elements after given index
        for (uint32_t i = mSize; i > index; i--) {
            mArray[i] = mArray[i - 1];
        }
        // insert new value to the array
        mArray[index] = value;
        mSize++;
    } else {
        // If index is not in range, continue doubling the capacity
        // from the current capacity until the desired index is in range
        while (mCapacity <= index) {
            if (mCapacity == 0) {
                mCapacity = 1;
            }
            else {
                // double the capacity from the current capacity
                mCapacity *= 2;
            }
        }
        T* newBuffer = new T[mCapacity + 1];
        // copy old values to new allocated buffer
        for (uint32_t i = 0; i < mSize; i++) {
            newBuffer[i] = mArray[i];
        }
        mArray.reset(newBuffer);

        // initialize empty elements up to the new size with the default value for the template type
        for (uint32_t i = mSize; i < index; i++) {
            mArray[i] = T();
        }
        // insert new value to the array
        mArray[index] = value;
        mSize = index + 1;
    }

    return mCapacity;
}

template <typename T>
void ArrayList<T>::clear() {
    mSize = 0;
    mCapacity = 0;
    T *buffer = new T[mCapacity + 1]; // dummy end node
    mArray.reset(buffer);
}

template <typename T>
const T& ArrayList<T>::get(const uint32_t& index) const {
    if (index >= mSize) {
        throw std::out_of_range(std::to_string(index));
    }
    return mArray[index];
}

template <typename T>
T& ArrayList<T>::get(const uint32_t& index) {
    return const_cast<T&>(static_cast<const ArrayList<T>*>(this)->get(index));
}

template <typename T>
T& ArrayList<T>::operator[](const uint32_t& index) {
    return const_cast<T&>(static_cast<const ArrayList<T>*>(this)->operator[](index));
}

template <typename T>
const T& ArrayList<T>::operator[](const uint32_t& index) const {
    return mArray[index];
}

template <typename T>
bool ArrayList<T>::isEmpty() const {
    return mSize == 0;
}

template <typename T>
ArrayListIterator<T> ArrayList<T>::begin() {
    return ArrayListIterator<T>(&(mArray[0]));
}

template <typename T>
ArrayListIterator<T> ArrayList<T>::end() {
    return ArrayListIterator<T>(&(mArray[mSize]));
}

template <typename T>
ArrayListConstIterator<T> ArrayList<T>::begin() const {
    return ArrayListConstIterator<T>(&(mArray[0]));
}

template <typename T>
ArrayListConstIterator<T> ArrayList<T>::end() const {
    return ArrayListConstIterator<T>(&(mArray[mSize]));
}

template <typename T>
T ArrayList<T>::remove(const uint32_t& index) {
    if (index >= mSize) {
        throw std::out_of_range(std::to_string(index));
    }
    T value = mArray[index];
    // shift all elements after index
    for (uint32_t i = index; i < mSize - 1; i++) {
        mArray[i] = mArray[i + 1];
    }
    mSize--;
    return value;
}

template <typename T>
void ArrayList<T>::set(const uint32_t& index, const T& value) {
    if (index >= mSize) {
        throw std::out_of_range(std::to_string(index));
    }
    mArray[index] = value;
}

template <typename T>
uint32_t ArrayList<T>::size() const {
    return mSize;
}

#endif // ARRAYLIST_CPP
