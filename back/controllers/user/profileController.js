// @desc Get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = (req, res) => {
    const user = {
        name: 'jija',
        age: 22
    }

    res.json(user)
}