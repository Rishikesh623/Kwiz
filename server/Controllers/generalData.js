async function getStudentsByAdmin(adminId) {
    const adminAssociation = await UserAssociation.findOne({ userId: adminId, role: 'admin' }).populate('associatedUsers');
    return adminAssociation ? adminAssociation.associatedUsers : [];
}

// Example usage
const adminId = 'someAdminObjectId';
getStudentsByAdmin(adminId).then(students => {
    console.log(students);
}).catch(console.error);
