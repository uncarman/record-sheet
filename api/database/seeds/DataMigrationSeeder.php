<?php

use Illuminate\Database\Seeder;

class DataMigrationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::unprepared(file_get_contents(base_path("database/seeds/sql/devices.sql")));
        DB::unprepared(file_get_contents(base_path("database/seeds/sql/locations.sql")));
        DB::unprepared(file_get_contents(base_path("database/seeds/sql/maintain_logs.sql")));
        DB::unprepared(file_get_contents(base_path("database/seeds/sql/device_check_items.sql")));
        DB::unprepared(file_get_contents(base_path("database/seeds/sql/device_check_item_log.sql")));
    }
}
