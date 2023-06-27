import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/Form/InputError.jsx';
import InputLabel from '@/Components/Form/InputLabel.jsx';
import PrimaryButton from '@/Components/Form/PrimaryButton.jsx';
import TextInput from '@/Components/Form/TextInput.jsx';
import { Head, Link, useForm } from '@inertiajs/react';
import SelectForm from "@/Components/Form/SelectForm.jsx";
import {Button} from "flowbite-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        birth_sex:'',
        birth_date:'',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const genderOptions = [
        {
            id: 'male',
            value: 'Male'
        },
        {
            id: 'female',
            value: 'Female'
        }
    ];

    return (
        <GuestLayout>
            <Head title="Register" />

            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register your account
            </h1>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Birth date" />

                    <TextInput
                        id="birth_date"
                        type="date"
                        name="birth_date"
                        value={data.birth_date}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('birth_date', e.target.value)}
                        required
                    />

                    <InputError message={errors.birth_date} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Birth gender" />

                    <SelectForm
                        id="birth_sex"
                        type="date"
                        name="birth_sex"
                        value={data.birth_sex}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('birth_sex', e.target.value)}
                        defaultValue={'Choose a gender'}
                        options={genderOptions}
                        required
                    />
                    <InputError message={errors.birth_sex} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>


                <div className="flex flex-col items-center justify-end mt-6 p-0.5">
                    <Button type="submit" className="w-full" disabled={processing}>
                        Register
                    </Button>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-6">
                    Already registered?
                    <Link
                        href={route('login')}
                        className="font-medium text-cyan-700 hover:underline pl-1"
                    >
                        Sign in
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}
