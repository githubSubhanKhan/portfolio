import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactMe = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendToMongoDB = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/form/submit`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) throw new Error("Failed to send message");

            const data = await res.json();
            console.log("✅ MongoDB Response:", data);
        } catch (error) {
            console.error("❌ Error sending to MongoDB", error);
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await sendToMongoDB(); // Send only to MongoDB
            setFormData({ name: "", email: "", message: "" });
            setIsSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reset success message after 5 seconds
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    const getResponsePreview = () => {
        if (isSuccess) {
            return {
                status: 200,
                message: "Message sent successfully!",
                data: {
                    timestamp: new Date().toISOString(),
                    ...formData,
                },
            };
        }

        if (error) {
            return {
                status: 400,
                error: error,
                data: formData,
            };
        }

        return {
            status: isSubmitting ? "Processing..." : "Waiting for submission",
            data: formData,
        };
    };

    return (
        <section className="py-12 px-4 scroll-m-nav" id="contact-me">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center text-primary">Contact Me</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Left side - Contact Form */}
                    <div className="bg-bluecustom p-6 rounded-lg shadow-md border border-black border-[2px]">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full focus:ring-primary focus:border-primary border border-black border-[2px]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="w-full focus:ring-primary focus:border-primary border border-black border-[2px]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        className="w-full h-32 focus:ring-primary focus:border-primary border border-black border-[2px] bg-white"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-white hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 border border-primary border-[2px] hover:bg-white py-2"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>

                                {isSuccess && (
                                    <div className="flex items-center text-green-600 mt-2">
                                        <Check size={16} className="mr-1" />
                                        <span>Message sent successfully!</span>
                                    </div>
                                )}

                                {error && <div className="text-red-500 mt-2">{error}</div>}
                            </div>
                        </form>
                    </div>

                    {/* Right side - JSON Preview */}
                    <div className="hidden md:block">
                        <Card className="p-6 bg-bluecustom border border-black border-[2px] h-full overflow-hidden">
                            <h3 className="text-lg font-medium mb-4 text-black">Response Preview</h3>
                            <div className="bg-black/80 p-4 rounded-md overflow-auto h-[380px]">
                                <pre className="text-green-500 text-sm whitespace-pre-wrap">
                                    {JSON.stringify(getResponsePreview(), null, 2)}
                                </pre>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
