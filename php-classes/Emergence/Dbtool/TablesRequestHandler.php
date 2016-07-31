<?php

namespace Emergence\Dbtool;

use DB;

class TablesRequestHandler extends \RequestHandler
{
    static public function handleRequest()
    {
        $node = $_REQUEST['node'];
        $type = $_REQUEST['type'];
        $parent = $_REQUEST['parent'];

        if (isset($node)) {
            if ($node === 'root') {
                return static::handleDatabasesRequest();
            }
            if ($type === 'Database') {
                return static::handleTablesRequest($parent);
            }
        } else if ($type === 'table') {
                return static::handleTableRequest($parent);
        }

        static::respondJson(null, [
            'success' => true,
            'children' => []
        ]);

    }

    static public function handleDatabasesRequest()
    {
        $results = DB::query('show databases');
        $databases = [];

        while ($record = $results->fetch_array()) {
            array_push($databases,[
                'Name' => $record[0],
                'mtype' => 'EmergenceDbtool.model.Database',
                //'mtype' => 'Database',
                'Type' => 'database'
            ]);
        }

        static::respondJson('null', [
            'success' => true,
            'children' => $databases
        ]);
    }

    static public function handleTablesRequest($db_name)
    {
        $results = DB::query('use '.$db_name);

        $results = DB::query('show tables');
        $tables = [];

        while ($record = $results->fetch_array()) {
            $cols = [];
            $describe = DB::query('describe '. $record[0]);

            while ($column = $describe->fetch_assoc()) {
                    $column['Name'] = $column['Field'];  //TODO: remove this is we ever get mtype working
                    $column['db'] = $db_name;
                    $column['leaf'] = true;

                    array_push($cols, $column);
            }

            array_push($tables,[
                'Name' => $record[0],
                'mtype' => 'Table',
                'Type' => 'table',
                'db' => $db_name,
                'children' => $cols
            ]);
        }

        static::respondJson('null', [
            'success' => true,
            'children' => $tables
        ]);
    }

    static public function handleTableRequest($table_name)
    {
        $cols = [];
        $describe = DB::query('describe '. $table_name);

        while ($column = $describe->fetch_assoc()) {
                $column['Name'] = $column['Field'];  //TODO: remove this is we ever get mtype working

                array_push($cols, $column);
        }

        $table = [
            'Name' => $table_name,
            'Columns' => $cols
        ];

        static::respondJson('null', [
//            'success' => true,
            'data' => [],
            'metaData' => $table
        ]);
    }

}
