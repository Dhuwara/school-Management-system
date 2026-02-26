import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Modal from '../../../components/ui/Modal';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import axios from 'axios';

const studentSchema = z.object({
  studentId: z.string().min(1, 'Student ID is required'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  grade: z.string().min(1, 'Grade is required'),
  section: z.string().min(1, 'Section is required'),
  rollNumber: z.string().min(1, 'Roll number is required'),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
    country: z.string().optional()
  }).optional(),
  parentInfo: z.object({
    fatherName: z.string().optional(),
    fatherPhone: z.string().optional(),
    fatherEmail: z.string().email().optional().or(z.literal('')),
    motherName: z.string().optional(),
    motherPhone: z.string().optional(),
    motherEmail: z.string().email().optional().or(z.literal('')),
    guardianName: z.string().optional(),
    guardianPhone: z.string().optional(),
    guardianRelation: z.string().optional()
  }).optional()
});

const StudentForm = ({ isOpen, onClose, onSuccess, student = null }) => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: student || {
      address: {},
      parentInfo: {}
    }
  });

  React.useEffect(() => {
    if (student) {
      reset(student);
    }
  }, [student, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      if (student) {
        await axios.put(`http://localhost:5000/api/students/${student._id}`, data, config);
      } else {
        await axios.post('http://localhost:5000/api/students', data, config);
      }

      onSuccess();
      onClose();
      reset();
    } catch (error) {
      console.error('Error saving student:', error);
      alert(error.response?.data?.message || 'Error saving student');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'academic', label: 'Academic Info' },
    { id: 'parent', label: 'Parent Info' },
    { id: 'address', label: 'Address' }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title={student ? 'Edit Student' : 'Add New Student'}>
      <div className="space-y-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {activeTab === 'personal' && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="studentId"
                    label="Student ID"
                    {...register('studentId')}
                    error={errors.studentId?.message}
                  />
                  <Input
                    id="firstName"
                    label="First Name"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                  />
                  <Input
                    id="lastName"
                    label="Last Name"
                    {...register('lastName')}
                    error={errors.lastName?.message}
                  />
                  <Input
                    id="email"
                    label="Email"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                  <Input
                    id="phone"
                    label="Phone"
                    {...register('phone')}
                    error={errors.phone?.message}
                  />
                  <Input
                    id="dateOfBirth"
                    label="Date of Birth"
                    type="date"
                    {...register('dateOfBirth')}
                    error={errors.dateOfBirth?.message}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      {...register('gender')}
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'academic' && (
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    id="grade"
                    label="Grade"
                    {...register('grade')}
                    error={errors.grade?.message}
                  />
                  <Input
                    id="section"
                    label="Section"
                    {...register('section')}
                    error={errors.section?.message}
                  />
                  <Input
                    id="rollNumber"
                    label="Roll Number"
                    {...register('rollNumber')}
                    error={errors.rollNumber?.message}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'parent' && (
            <Card>
              <CardHeader>
                <CardTitle>Parent Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="text-md font-medium text-gray-900">Father Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="parentInfo.fatherName"
                      label="Father Name"
                      {...register('parentInfo.fatherName')}
                      error={errors.parentInfo?.fatherName?.message}
                    />
                    <Input
                      id="parentInfo.fatherPhone"
                      label="Father Phone"
                      {...register('parentInfo.fatherPhone')}
                      error={errors.parentInfo?.fatherPhone?.message}
                    />
                    <Input
                      id="parentInfo.fatherEmail"
                      label="Father Email"
                      type="email"
                      {...register('parentInfo.fatherEmail')}
                      error={errors.parentInfo?.fatherEmail?.message}
                    />
                  </div>

                  <h4 className="text-md font-medium text-gray-900 mt-4">Mother Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="parentInfo.motherName"
                      label="Mother Name"
                      {...register('parentInfo.motherName')}
                      error={errors.parentInfo?.motherName?.message}
                    />
                    <Input
                      id="parentInfo.motherPhone"
                      label="Mother Phone"
                      {...register('parentInfo.motherPhone')}
                      error={errors.parentInfo?.motherPhone?.message}
                    />
                    <Input
                      id="parentInfo.motherEmail"
                      label="Mother Email"
                      type="email"
                      {...register('parentInfo.motherEmail')}
                      error={errors.parentInfo?.motherEmail?.message}
                    />
                  </div>

                  <h4 className="text-md font-medium text-gray-900 mt-4">Guardian Information (if applicable)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="parentInfo.guardianName"
                      label="Guardian Name"
                      {...register('parentInfo.guardianName')}
                      error={errors.parentInfo?.guardianName?.message}
                    />
                    <Input
                      id="parentInfo.guardianPhone"
                      label="Guardian Phone"
                      {...register('parentInfo.guardianPhone')}
                      error={errors.parentInfo?.guardianPhone?.message}
                    />
                    <Input
                      id="parentInfo.guardianRelation"
                      label="Guardian Relation"
                      {...register('parentInfo.guardianRelation')}
                      error={errors.parentInfo?.guardianRelation?.message}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'address' && (
            <Card>
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="address.street"
                    label="Street Address"
                    {...register('address.street')}
                    error={errors.address?.street?.message}
                  />
                  <Input
                    id="address.city"
                    label="City"
                    {...register('address.city')}
                    error={errors.address?.city?.message}
                  />
                  <Input
                    id="address.state"
                    label="State"
                    {...register('address.state')}
                    error={errors.address?.state?.message}
                  />
                  <Input
                    id="address.zipCode"
                    label="ZIP Code"
                    {...register('address.zipCode')}
                    error={errors.address?.zipCode?.message}
                  />
                  <Input
                    id="address.country"
                    label="Country"
                    {...register('address.country')}
                    error={errors.address?.country?.message}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
            >
              {student ? 'Update Student' : 'Add Student'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default StudentForm;
