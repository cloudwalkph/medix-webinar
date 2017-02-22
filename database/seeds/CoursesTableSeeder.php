<?php

use Illuminate\Database\Seeder;

use App\Course;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::create([
            'title' => 'Temporization: The Road to Final Restoration',
            'description' => 'The current trend of the dental profession is geared towards esthetics and beauty. All patients want a beautiful and pleasant smile. Practitioners all agree that Temporization is one basic and essential procedure that ensures optimal esthetics for our fixed restorative cases.',
            'language' => 'English',
            'start' => '2017-01-01 00:00:00',
            'end' => '2017-01-08 00:00:00',
            'price' => '0.00'
        ]);
        Course::create([
            'title' => 'Can Endodontics Cause Cancer?',
            'description' => 'Cancer is a multifactorial disease. Despite numerous research, its pathophysiology has yet to be fully elucidated. Gene mutations which ultimately contribute to uncontrolled cell division may be inherited and other external factors may indeed be suspect. However, many of these external factors still need to undergo extensive investigation. To directly correlate root canal therapy and cancer formation is, for now, a theory which yet needs to be proven. As for now, it would be safe to recommend this form of treatment to patients as this is considered to be less radical than tooth extraction.',
            'language' => 'English',
            'start' => '2017-02-22 10:00:00',
            'end' => '2017-02-22 11:00:00',
            'price' => '0.00'
        ]);
    }
}
