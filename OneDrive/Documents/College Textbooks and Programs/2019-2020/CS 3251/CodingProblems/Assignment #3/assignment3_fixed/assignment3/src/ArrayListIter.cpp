//
//
#ifndef ARRAYLISTITER_CPP
#define ARRAYLISTITER_CPP

template <typename T>
bool ArrayListIterator<T>::operator==(const ArrayListIterator<T>& rhs) const {
    return this->mPtr == rhs.mPtr;
}

template <typename T>
bool ArrayListIterator<T>::operator!=(const ArrayListIterator<T>& rhs) const {
    return this->mPtr != rhs.mPtr;
}

template <typename T>
T& ArrayListIterator<T>::operator*() {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    return *(this->mPtr);

    // return const_cast<T&>(static_cast<const ArrayListIterator<T>*>(this)->operator*());
}

template <typename T>
const T& ArrayListIterator<T>::operator*() const {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    return *(this->mPtr);
}


template <typename T>
T* ArrayListIterator<T>::operator->() {
    return this->mPtr;
}

template <typename T>
const T* ArrayListIterator<T>::operator->() const {
    return this->mPtr;
}

template <typename T>
ArrayListIterator<T>& ArrayListIterator<T>::operator++() {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }

    mPtr++; // advance iterator
    return *this;
}

template <typename T>
ArrayListIterator<T> ArrayListIterator<T>::operator++(int) {
    ArrayListIterator<T> oldIterator(mPtr);
    if (mPtr != nullptr) {
        mPtr++;
    }
    return oldIterator;
}

template <typename T>
ArrayListIterator<T>& ArrayListIterator<T>::operator--() {

    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }

    mPtr--; // advance iterator
    return *this;
}

template <typename T>
ArrayListIterator<T> ArrayListIterator<T>::operator--(int) {
    ArrayListIterator<T> oldIterator(mPtr);
    if (mPtr != nullptr) {
        mPtr--;
    }
    return oldIterator;
}

template <typename T>
ArrayListIterator<T> ArrayListIterator<T>::operator+(int offset) const {
    ArrayListIterator<T>  newIterator(mPtr);
    for (unsigned int i = 0; i < offset; ++i) {
        if (newIterator.mPtr != nullptr) {
            ++(newIterator.mPtr);
        } else {
            throw std::out_of_range("Out of bounds exception.");
        }
    }
    return newIterator;
}

template <typename T>
ArrayListIterator<T> ArrayListIterator<T>::operator-(int offset) const {
    ArrayListIterator<T>  newIterator(mPtr);
    for (unsigned int i = 0; i < offset; ++i) {
        if (newIterator.mPtr != nullptr) {
            --(newIterator.mPtr);
        } else {
            throw std::out_of_range("Out of bounds exception.");
        }
    }
    return newIterator;
}

template <typename T>
int ArrayListIterator<T>::operator-(const ArrayListIterator<T>& rhs) const {
    /*int offset = 0;
    if (mPtr > rhs.mPtr) {
        ArrayListIterator<T>  tmpIterator(rhs.mPtr);
        while (tmpIterator && tmpIterator != *this) {
            tmpIterator++;
            offset++;
        }
    } else {
        ArrayListIterator<T>  tmpIterator(mPtr);
        while (tmpIterator && tmpIterator != rhs) {
            tmpIterator++;
            offset--;
        }
    }
    return offset; */
    return mPtr - rhs.mPtr;
}

template <typename T>
ArrayListIterator<T>& ArrayListIterator<T>::operator+=(const int& offset) {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    mPtr += offset;
    return *this;
}

    /**
     * Decrements this iterator by offset
     * @param offset distance to move backwards
     * @return *this after the operation.
     */
template <typename T>
ArrayListIterator<T>& ArrayListIterator<T>::operator-=(const int& offset) {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    mPtr -= offset;
    return *this;
}

    /**
     * Subscript operator.
     * Must call to const operator[].  Do not reimplement!!!
     * @param index offset from current position.
     * @return the T & to the value at the index offset from *this.
     */
template <typename T>
T& ArrayListIterator<T>::operator[](const int& index) {
   return const_cast<T&>(static_cast<const ArrayListIterator<T>*>(this)->operator[](index));
}

    /**
     * Subscript operator.
     * @param index offset from current position.
     * @return the const T & to the value at the index offset from *this.
     */
template <typename T>
const T& ArrayListIterator<T>::operator[](int index) const {
    ArrayListIterator<T> advancedIterator(mPtr + index);
    return *(advancedIterator.mPtr);
}

template <typename T>
ArrayListIterator<T>::ArrayListIterator(T* ptr): mPtr(ptr)
{
}

template <typename T> ArrayListIterator<T> operator+(int offset, const ArrayListIterator<T>& iter) {
    return iter + offset;
}

template <typename T>
bool ArrayListConstIterator<T>::operator==(const ArrayListConstIterator<T>& rhs) const {
    return this->mPtr == rhs.mPtr;
}

template <typename T>
bool ArrayListConstIterator<T>::operator!=(const ArrayListConstIterator<T>& rhs) const {
    return this->mPtr != rhs.mPtr;
}

template <typename T>
const T& ArrayListConstIterator<T>::operator*() const {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    return *mPtr;
}

template <typename T>
const T* ArrayListConstIterator<T>::operator->() const {
    return this->mPtr;
}

template <typename T>
ArrayListConstIterator<T>& ArrayListConstIterator<T>::operator++() {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }

    mPtr++; // advance iterator
    return *this;
}

template <typename T>
ArrayListConstIterator<T> ArrayListConstIterator<T>::operator++(int) {
    ArrayListConstIterator<T> oldIterator(mPtr);
    if (mPtr != nullptr) {
        mPtr++;
    }
    return oldIterator;
}

template <typename T>
ArrayListConstIterator<T>& ArrayListConstIterator<T>::operator--() {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }

    mPtr--; // advance iterator
    return *this;
}


template <typename T>
ArrayListConstIterator<T> ArrayListConstIterator<T>::operator--(int) {
    ArrayListConstIterator<T> oldIterator(mPtr);
    if (mPtr != nullptr) {
        mPtr--;
    }
    return oldIterator;
}


template <typename T>
ArrayListConstIterator<T> ArrayListConstIterator<T>::operator+(int offset) const {
    ArrayListConstIterator<T>  newIterator(mPtr + offset);
    return newIterator;
}

template <typename T>
ArrayListConstIterator<T> ArrayListConstIterator<T>::operator-(int offset) const {
    ArrayListConstIterator<T>  newIterator(mPtr - offset);
    return newIterator;
}

template <typename T>
int ArrayListConstIterator<T>::operator-(const ArrayListConstIterator<T>& rhs) const {
    return mPtr - rhs.mPtr;
}

template <typename T>
ArrayListConstIterator<T>& ArrayListConstIterator<T>::operator+=(const int& offset) {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    mPtr += offset;
    return *this;
}


template <typename T>
ArrayListConstIterator<T>& ArrayListConstIterator<T>::operator-=(const int& offset) {
    if (mPtr == nullptr) {
        throw std::out_of_range("Out of bounds exception.");
    }
    mPtr -= offset;
    return *this;
}


template <typename T>
const T& ArrayListConstIterator<T>::operator[](int index) const {
    ArrayListConstIterator<T> advancedIterator(mPtr + index);
    return *(advancedIterator.mPtr);
}

template <typename T>
ArrayListConstIterator<T>::ArrayListConstIterator(const T* ptr): mPtr(ptr)
{
}

template <typename T>
ArrayListConstIterator<T> operator+(const int32_t& offset, const ArrayListConstIterator<T>& iter) {
    return iter + offset;
}

#endif // ARRAYLISTITER_CPP
